import { useEffect, useState } from 'react';
import GridComponent from '../../component/grid/GridComponent.component';
import Form from './form/Form.component';
import Search from './interfaces/Search';
import { searchPost } from './Dashboard.service';
import { useSnackbar } from '../../context/Snackbar';
import Card from '../../component/card/Card.component';
import { Grid } from '@material-ui/core';
import FontBoldComponent from '../../component/fontBold/FontBold.component';
import { valueMonetary } from '../../utils/format/FormatMonetary';
import { INITIAL_VALUES, INITIAL_VALUES_DATA } from './utils/INITIAL_VALUES';
import { FormatDefaultDate } from '../../utils/format/FormatDate';

export default function Dashboard() {
    const { setSnackbar } = useSnackbar();
    const [request, setRequest] = useState(false);
    const [data, setData] = useState<any>(INITIAL_VALUES_DATA);

    useEffect(() => {
        onSubmit(INITIAL_VALUES);
    }, []);

    const onSubmit = async (data: Search) => {
        setRequest(true);
        let search: Search = JSON.parse(JSON.stringify(data));

        if (data.endDate && data.startDate) {
            search.startDate = FormatDefaultDate(data.startDate) + 'T00:00:00.000Z';
            search.endDate = FormatDefaultDate(data.endDate) + 'T23:59:59.000Z';
        }
        if (data.month && data.month < 0) {
            delete data.month;
        }
        delete search.isMonth;
        await searchPost(search).then(res => {
            setData(res.data);
        }).catch(error => {
            setSnackbar({ msg: 'Falha na busca dos dados financeiros!', type: 'error' });
        }).finally(() => {
            setRequest(false);
        });
    };

    return (
        <>
            <GridComponent justify="flex-start" alignItems="center" margin="1px 0px 20px 0px" >
                <Grid item xs={12}>
                    <Form initialValues={INITIAL_VALUES} handleSubmitForm={onSubmit} request={request} />
                </Grid>
            </GridComponent>
            <GridComponent justify="flex-start" alignItems="center" spacing={1} >
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Produtos adicionados " width='300px' padding="0px 10px 20px 10px">
                        <FontBoldComponent title={String(data.totalProducts)} />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Valor gasto em produtos" width='300px' padding="0px 10px 20px 10px">
                        <FontBoldComponent title="R$ " subTitle={valueMonetary(data.valueProducts)} />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Vendas realizadas" width='300px' padding="0px 10px 20px 10px">
                        <FontBoldComponent title={String(data.totalSale)} />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Receita com vendas" width='300px' padding="0px 10px 20px 10px">
                        <FontBoldComponent title="R$ " subTitle={valueMonetary(data.valueSale)} />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Lucro/Prejuízo" width='300px' padding="0px 10px 20px 10px" color={data.lucro >= 0 ? (data.lucro > 0 ? '#00FF7F' : '#FFFFFF') : '#FF0000'} >
                        <FontBoldComponent title={`R$ ${valueMonetary(data.valueSale - data.valueProducts)}`} />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card title="Lucratividade" color={data.lucro >= 0 ? (data.lucro > 0 ? '#00FF7F' : '#FFFFFF') : '#FF0000'} width='300px' padding="0px 10px 20px 10px">
                        <FontBoldComponent title={`${data.lucro.toFixed(2)} %`} />
                    </Card>
                </Grid>
            </GridComponent>
        </>
    );
}

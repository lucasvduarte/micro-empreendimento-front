import { memo, useState, useEffect } from 'react';
import { FormSelect, DatePicker, FormInput } from '../../../component/input/InputStyle';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Search from '../interfaces/Search';
import { FormProps } from '../interfaces/Form';
import { MONTHS } from '../utils/Months';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Produtc from '../../produtc/interfaces/Produtc';
import { getProdutc } from '../../produtc/Produtc.service';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Form = ({ handleSubmitForm, initialValues }: FormProps) => {

    const [produtcs, setProdutcs] = useState<Produtc[]>([]);

    useEffect(() => {
        getProdutc().then(res => {
            if (res.data) {
                setProdutcs(res.data.filter((produtc: Produtc) => produtc.qtd > 0));
            }
        });
    }, []);

    const { handleSubmit, handleChange, values, setFieldValue } = useFormik<Search>({
        initialValues: initialValues,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <GridComponent justify="flex-start" alignItems="center" spacing={1} >
                <Grid item xs={values.isMonth ? 3 : 3} sm={2} md={2} lg={1}>
                    <FormControlLabel
                        control={<Switch name="isMonth" value={values.isMonth} checked={values.isMonth === true} onChange={handleChange} color="primary" />}
                        label="Mês"
                        labelPlacement="start"
                        style={{ marginLeft: 2 }}
                    />
                </Grid>
                {values.isMonth && (
                    <Grid item xs={9} sm={3} md={2} >
                        <Select
                            name="month"
                            value={values.month}
                            onChange={handleChange}
                            input={<FormSelect />}
                            id='select-month'
                        >
                            {MONTHS.map((months: any, index: number) => {
                                return <MenuItem value={months.id || index} key={index}>{months.name}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                )}

                <Grid item xs={values.isMonth ? 10 : 9} sm={3} md={2}  >
                    <Autocomplete
                        fullWidth
                        noOptionsText='Não encontrado'
                        onChange={(_event: React.ChangeEvent<any>, produtc: Produtc | null) => {
                            setFieldValue('_id', produtc?._id)
                        }}
                        id="product-autocomplete"
                        options={produtcs}
                        getOptionLabel={(produtc: Produtc) => produtc.name}
                        renderInput={(params) => <FormInput {...params} label="Produto" size='small' />}
                    />
                </Grid>
                {!values.isMonth && (
                    <>
                        <Grid item xs={5} sm={3} md={2} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <DatePicker
                                    value={values.startDate || null}
                                    maxDateMessage="data não pode ser maior que Data de Fim"
                                    maxDate={values.endDate || null}
                                    onChange={(date: Date) => setFieldValue('startDate', date)}
                                    label="Inicial"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={5} sm={3} md={2} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <DatePicker
                                    value={values.endDate || null}
                                    minDate={values.startDate || null}
                                    maxDateMessage="data não pode ser menor que Data de Inicio"
                                    onChange={(date: Date) => setFieldValue('endDate', date)}
                                    label="Final"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </>
                )}
                <IconButton type="submit" aria-label="search" size="small" >
                    <SearchIcon fontSize="large" color="primary" />
                </IconButton>
            </GridComponent>
        </form>
    )
}

export default memo(Form);
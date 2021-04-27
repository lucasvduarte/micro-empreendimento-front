import { ReactNode } from 'react';
import { Header, Page, Title } from './HeaderStyle';
import GridComponent from '../grid/GridComponent.component';
import ButtonLink from '../buttton/ButtonLink.component';

type Props = {
    page?: string;
    name: string;
    children: ReactNode;
    button?: boolean;
    titleButton?: string;
    link?: string;
}

export default function Hearder({ page, name, children, button, titleButton, link }: Props) {
    let pageName = page?.split('>');
    return (
        <Header>
            {pageName && <Page>{`${pageName[0]} > `}<span>{pageName[1]}</span> </Page>}
            <GridComponent justify="space-between">
                <Title>{name}</Title>
                {button && <ButtonLink title={titleButton || ''} link={link || '/'} margin="0px 5px 0px 0px" />}
            </GridComponent>
            {children}
        </Header>
    );
}

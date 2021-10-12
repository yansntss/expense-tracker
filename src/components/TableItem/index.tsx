import * as C from './styles'
import {Item} from '../../types/Items'
import { formateDate } from '../../helpers/dateFilter'
import {categories} from '../../data/categories'

type Props = { 
    item: Item
}

export const TableItem = ({item}: Props) => {
return (
    <C.TableLine>
        <C.TableColumn>{formateDate(item.date)}</C.TableColumn>
        <C.TableColumn>{categories[item.category].title}</C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>
        <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
)
};
import * as C from './styles'
import {formataCurrentMonth } from '../../helpers/dateFilter'
type Props = {
    currentMonth: string
}

export const InfoArea = ({currentMonth }: Props) => {
    return(
        <C.Container> 
            <C.MonthArea>
                <C.MonthArrow>⬅️</C.MonthArrow>
                <C.MonthTitle> {formataCurrentMonth(currentMonth)} </C.MonthTitle>
                <C.MonthArrow>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
         </C.Container>

    );
}
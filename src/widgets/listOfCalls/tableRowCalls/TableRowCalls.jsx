import './tableRowCalls.styles.css'
import incomingIcon from './icons/incoming.svg'
import outgoingIcon from './icons/outgoing.svg'
import avatarStub from './icons/avatarStub.png'
import web from './icons/webIcon.svg'
import phone from './icons/phone.svg'
import formattedDate from './lib/time'
import formattedPhone from './lib/phone'
import callTime from './lib/callTime'
import { ButtonIcon } from '../../../shared/buttonIcon/ButtonIcon'


export const TableRowCalls = ({call}) => {


    return (
        
        <tr key={call.id}>
            <td><input type="checkbox" name="" id=""/></td>
            { 
                call.in_out === 1 ?
                <td scope='col'><img src={incomingIcon} alt="#" /></td>
                :
                <td scope='col'><img src={outgoingIcon} alt="#" /></td>
            }
            <td scope='col'>{formattedDate(call.date)}</td>
            <td scope='col'><img src={avatarStub} alt={call.person_avatar} /></td>
            <td scope='col' style={{textAlign: 'center'}}>
                <ButtonIcon><img src={web} alt="#"/></ButtonIcon>
                <ButtonIcon><img src={phone} alt="#"/></ButtonIcon>
                {formattedPhone(call.partner_data.phone)}
                </td>
            <td scope='col'>{call.partner_data.name}</td>
            <td scope='col'>(Хорошо, Плохо, Распознать)</td>
            { call.time !== 0 ?
                <td scope='col'>{callTime(call.time)}</td>
                :
                <td></td>   
            }
        </tr>
    )
}
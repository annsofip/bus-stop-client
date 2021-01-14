import texts from '../nls/texts'
import {Alert} from 'react-bootstrap/cjs/index';

export default function Error() {
    return (<Alert variant='danger'>
        {texts.errorText}
    </Alert>)
}

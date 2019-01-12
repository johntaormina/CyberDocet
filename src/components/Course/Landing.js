import react from 'react';
import { withFirebase } from '../firebase/context';
import { AuthUserContext} from '../session';

class Landing extends React.Component {
    constructor(props){
    super(props);
}
    render() {
        return(
            <div>HIIII</div>
        )
    }
}

export default withFirebase(Landing);
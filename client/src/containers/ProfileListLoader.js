import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { showProfile, fetchData } from '../actions/index'
import ProfileList from '../components/ProfileList';

const baseUri = 'http://localhost:8080/getProfiles';


const mapStateToProps = (state, ownProps) => {

  
    const {
        identity,
        dataArr
    } = state

    const profileInfo =  dataArr.response

    return {
        initialValues: identity.profile,
        dataArr,
        profileInfo
    }
  }
export default connect(

    mapStateToProps,

    dispatch => ({
        onSubmit: values => {
            console.log('ee')
            dispatch(showProfile())
            //dispatch(push('/login')) // TODO: Not working 
        },
        getUser: async id => {
            console.log('get user')
            const result = await dispatch(fetch(`${baseUri}`, { method: 'GET' }));
        },
        onFetch: async values => 
            dispatch(await fetchData()),
    })
)(ProfileList)

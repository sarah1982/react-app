import React,{Component} from 'react';
import Aux from '../Aux/Aux'
import Modal from '../../Components/Modal/Modal';

const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component {
        state={
            error:null
        };
        componentWillMount(){
            this.reqInterceptor=axios.interceptors.request.use(req=>req,error=>{
                this.setState({error:null})
            })
            this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
            })
        }
        errorConfirmedHandler=()=>{
            this.setState({
                error:null
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
            
        }
        render(){
            
            return(
                <Aux>
                    <Modal purchasing={this.state.error} 
                    ModalClose={this.errorConfirmedHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent{...this.props}/>
                </Aux>
            )
        }
    }
    
}
    


export default withErrorHandler;
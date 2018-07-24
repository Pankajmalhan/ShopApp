import IAppState from '../state/appState';
import  * as _  from 'lodash';
export default function allReducers(state: IAppState, action: any) {
    switch(action.type){
        case 'Load_Category':
                return (<any>Object).assign({},state,{
                    category:action.payload
                });
        case 'Load_Product':
                return (<any>Object).assign({},state,{
                    productList:action.payload
                });
        case 'Load_ProductById':
                return (<any>Object).assign({},state,{
                    productListbyId:action.payload
                });
        case 'Set_UserInfo':
            return (<any>Object).assign({},state,{
                isAuthenticated:!_.isEmpty(action.payload),
                userData:action.payload
            }); 
        case 'Set_UserOrders':
            return (<any>Object).assign({},state,{
                userorders:action.payload
            }); 

    };
    return state;
}
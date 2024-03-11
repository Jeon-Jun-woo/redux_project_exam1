import {
    FETCH_FOOD_DETAIL, FETCH_FOOD_LIST, FETCH_PAGE, FETCH_RECIPE_PAGE,
    FETCH_RECIPE_COUNT, FETCH_RECIPE_LIST, FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_POSTERS, FETCH_RECIPE_MAKES, FETCH_FIND_LIST, FETCH_FIND_PAGE
} from "../actions/types";
/*
    board
    news
    food
    recipe
 */
const initialState={
    food_list:[],
    food_detail:{},
    total:0,
    recipe_list:[],
    recipe_total:0,
    recipe_count:0,
    recipe_detail:{},
    recipe_posters:[],
    recipe_makes:[],
    find_list:[],
    find_page:0
    //어디다 저장할지 적는곳
    //index에있는 foods안에 저장됨
}
/*
    let arr=[1,2,3,4,5]
    let k=...arr
 */
export default function (state=initialState,action){
    //state에 다 저장하고 변경된것만 저장
    console.log("reducer function call... action(전송)")
    //action 안에는  type, payload 가 있음
    switch(action.type)
    {
        case FETCH_FOOD_LIST:
            return {
                ...state, //복사뜨기
                food_list: action.payload 
            }
        case FETCH_FOOD_DETAIL:
            return{
                ...state,
                food_detail: action.payload
            }
            //action에서 보내준값을 타입에맞게 저장
        case FETCH_PAGE:
            return{
                ...state,
                total: action.payload
            }
        case FETCH_RECIPE_LIST:
            return {
                ...state, //...는 그전에잇던 데이터를 복사떠놓는다
                recipe_list: action.payload  //새로운 공간에 저장
            }
        case FETCH_RECIPE_COUNT:
            return{
                ...state,
                recipe_count: action.payload
            }
        case FETCH_RECIPE_PAGE:
            return{
                ...state,
                recipe_total: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return{
                ...state,
                recipe_detail:action.payload
            }
        case FETCH_RECIPE_MAKES:
            return{
                ...state,
                recipe_makes: action.payload
            }
        case FETCH_RECIPE_POSTERS:
            return{
                ...state,
                recipe_posters: action.payload
            }
        case FETCH_FIND_LIST:
            return{
                ...state,
                find_list: action.payload
            }
        case FETCH_FIND_PAGE:
            return{
                ...state,
                find_page: action.payload
            }
        default:
            return state
    }
}
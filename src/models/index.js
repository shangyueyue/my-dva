import haveDealModel  from './haveDeal/haveDealModel';

const models=[
  haveDealModel,
]
const modelConfig = (app)=>{
  models.forEach(medel=>app.model(medel))
}
export default modelConfig


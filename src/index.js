import dva from 'dva';
import createLoading from 'dva-loading';
import modelConfig from './models/index';
import './common/style/index.less';
import './common/style/iconStyle.less';

// 1. Initialize
const app = dva({
    onError (error) {
        console.error(error)
    },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
modelConfig(app);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

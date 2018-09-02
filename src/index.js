import dva from 'dva';
import createLoading from 'dva-loading';
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
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

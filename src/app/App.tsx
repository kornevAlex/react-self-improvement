import { classNames, useActionCreators } from 'shared/lib';
import { AppRouter } from './providers/router';
import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Navbar, Sidebar } from 'widgets';
import { getUserInited, userActions } from 'entities/User';
import { useSelector } from 'react-redux';

const App = () => {
  const inited = useSelector(getUserInited);
  const actions = useActionCreators(userActions);

  useEffect(() => {
    actions.initAuthData();
  }, [actions]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;

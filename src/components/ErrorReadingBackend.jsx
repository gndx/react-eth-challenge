import React from 'react';
import getEnvironmentVar from '../utils/getEnvironmentVar';

function ErrorReadingBackend({ error }) {
    const errorObj = error;
    const debugFlag = getEnvironmentVar('REACT_APP_DEBUG', '0');
    const errorMsg = 'No se pudo leer los datos. Por favor intente nuevamente en unos minutos';
    const retryMsg = 'Haga clic aquí para reintentar';
    return (
        <div className='Error-box'>
            <div className='Error-title'>Error</div>
            <div>
                <div className='Error-message'>{errorMsg}</div>
                <div className='Error-message'><a href='/'>{retryMsg}</a></div>
                <div className='Error-detail'>{debugFlag === '1' ? errorObj : ''}</div>
            </div>
        </div>
    );
};

export default ErrorReadingBackend;

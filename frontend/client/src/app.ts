import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@core/App';

// import { swRegister } from './swRegister';
//
// if ('serviceWorker' in navigator) {
//     swRegister();
// }

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(React.createElement(App));

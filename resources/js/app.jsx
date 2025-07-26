import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
const appName = import.meta.env.VITE_APP_NAME || 'Angelo Gonzales | Portfolio';

createInertiaApp({
    title: (title) => {
        if (title) {
            return `${title}`;
        }
        return appName; 
    },
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        
        root.render(
            <TransitionGroup>
                <CSSTransition
                    key={window.location.pathname} 
                    classNames="fade"
                    timeout={300}
                >
                    <App {...props} />
                </CSSTransition>
            </TransitionGroup>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

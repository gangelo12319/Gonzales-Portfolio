import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const appName = import.meta.env.VITE_APP_NAME || 'Angelo Gonzales | Portfolio';

const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    title: (title) => {
        if (title) {
            return `${title}`;
        }
        return appName;
    },
    resolve: (name) => {
        const importPage = pages[`./Pages/${name}.jsx`];
        if (!importPage) {
            throw new Error(`Page not found: ${name}`);
        }
        return lazy(importPage);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
                <TransitionGroup>
                    <CSSTransition
                        key={window.location.pathname}
                        classNames="fade"
                        timeout={300}
                    >
                        <App {...props} />
                    </CSSTransition>
                </TransitionGroup>
            </Suspense>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

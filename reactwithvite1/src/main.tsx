import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Icons from './Icons.tsx';
import './index.css'

createRoot(document.getElementById('root0')!).render(
  <StrictMode>
    <Icons />
  </StrictMode>,
)

createRoot(document.getElementById('root1')!).render(
  <StrictMode>
    <App reader="Reader 1" author="Author 1" location="top" />
    </StrictMode>,
)

createRoot(document.getElementById('root2')!).render(
  <StrictMode>
    <App reader="Reader 2" author="Author 2" location="middle" />
    </StrictMode>,
)

createRoot(document.getElementById('root3')!).render(
  <StrictMode>
    <App reader="Reader 3" author="Author 3" location="bottom" />
  </StrictMode>,
)

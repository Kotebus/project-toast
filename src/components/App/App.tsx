import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from "../ToastProvider/ToastProvider.tsx";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;

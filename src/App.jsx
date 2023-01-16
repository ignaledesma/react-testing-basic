import InputText from './components/input-text';
import InputStepper from './components/input-stepper';

export default function App() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-gray-50">
      <div className="m-20">
        <InputText label="Favorite color:" id="color" placeholder="Insert your favorite color..." />
      </div>

      <div>
        <InputStepper
          defaultValue={0}
        />
      </div>
    </main>
  );
}

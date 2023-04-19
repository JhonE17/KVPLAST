import { Button, Label, Select, TextInput } from 'flowbite-react';
import { countries, publicities } from '../data';

export const FormContactUs = () => {
  return (
    <>
      <div id='contactenos' className='mx-8'>
        <h2 className='mb-4 text-3xl mt-20 font-semibold text-center items-center justify-items-center leading-none tracking-tight text-gray-700 md:text-4xl lg:text-5xl'>
          Contáctenos
        </h2>
        <div className='grid place-items-center'>
          <form className='flex md:w-96 w-80 flex-col my-5 gap-3  '>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='name' value='Nombre*' />
              </div>
              <TextInput
                id='name'
                type='text'
                placeholder='John'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='lastName' value='Apellido*' />
              </div>
              <TextInput
                id='lastName'
                type='text'
                placeholder='Doe'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='phone' value='Numero Telefonico*' />
              </div>
              <TextInput
                id='phone'
                type='number'
                placeholder='52 55 1234 5678'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Correo Electronico*' />
              </div>
              <TextInput
                id='email'
                type='text'
                placeholder='jhondoe@example.com'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='countries' value='Estado de la República*' />
              </div>
              <Select id='countries' required={true}>
                {
                  countries.map((country, index)=>(
                    <option key={index} value={index}>{country.name}</option>
                  ))
                }
              </Select>
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='publicities' value='¿Como se entero de nosotros?*' />
              </div>
              <Select id='publicities' required={true}>
              {
                  publicities.map((publicity, index)=>(
                    <option key={index} value={index}>{publicity.name}</option>
                  ))
                }
              </Select>
            </div>
              <div className='flex justify-center md:w-full px-3'>
                <Button
                  className='w-1/3 bg-gray-600 hover:bg-gray-400'
                  type='submit'>
                  Enviar
                </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

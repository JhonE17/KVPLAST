import { Button, Label, Select, TextInput } from 'flowbite-react';

export const FormContactUs = () => {
  return (
    <><div className='mx-8'>
      <h2 className='mb-4 text-3xl mt-20 font-semibold text-center leading-none tracking-tight text-gray-700 md:text-4xl lg:text-5xl'>
        Contáctenos
      </h2>
      <form className='flex flex-col md:mx-96 my-5 gap-4'>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Nombre' />
          </div>
          <TextInput id='name' type='text' placeholder='John' required={true} />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='lastName' value='Apellido' />
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
            <Label htmlFor='phone' value='Numero Telefonico' />
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
            <Label htmlFor='email' value='Correo Electronico' />
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
            <Label htmlFor='countries' value='Estado de la República' />
          </div>
          <Select id='countries' required={true}>
          <option >Seleccione el valor</option>
            <option >Aguascalientes</option>
            <option >
              Baja California&nbsp;Norte
            </option>
            <option >Baja California Sur</option>
            <option >Campeche</option>
            <option >CDMX</option>
            <option >Coahuila</option>
            <option >Colima</option>
            <option >Chiapas</option>
            <option >Chihuahua</option>
            <option >Durango</option>
            <option >Edo. de Mexico</option>
            <option >Guanajuato</option>
            <option >Guerrero</option>
            <option >Hidalgo</option>
            <option >Jalisco</option>
            <option >Michoacan</option>
            <option >Morelos</option>
            <option >Nayarit</option>
            <option >Nuevo Leon</option>
            <option >Oaxaca</option>
            <option >Puebla</option>
            <option >Queretaro</option>
            <option >Quintana Roo</option>
            <option >San Luis Potosi</option>
            <option >Sinaloa</option>
            <option >Sonora</option>
            <option >Tabasco</option>
            <option >Tamaulipas</option>
            <option >Tlaxcala</option>
            <option >Veracruz</option>
            <option >Yucatan</option>
            <option >Zacatecas</option>
            <option >EXTRANJERO</option>
            <option >Guadalajara</option>
            <option >Baja California Norte</option>
            <option >Edo. de M</option>
            <option >Edo.de Mexico</option>
            <option >
              Baja Calilfornia Norte
            </option>
            <option >Jalisico</option>
            <option >Quitana Roo</option>
            <option >Merida</option>
            <option >Hidago</option>
            <option >Querataro</option>
            <option >Tuxtla</option>
            <option >Edo.deMexico</option>
            <option >Quinatana Roo</option>
          </Select>
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='public' value='¿Como se entero de nosotros?' />
          </div>
          <Select id='public' required={true}>
            <option >Seleccione el valor</option>
            <option >100FRANQUICIAS</option>
            <option >ANUNCIO DE TV AZTECA</option>
            <option >INSTAGRAM</option>
            <option >MULTIMEDIOS</option>
            <option >EL HERALDO</option>
            <option >EXPO-MERIDA</option>
            <option >
              INTERNET-GOOGLE
            </option>
            <option >FACEBOOK</option>
            <option >FACEBOOK SHOP</option>
            <option >MEDIOS IMPRESOS</option>
            <option >MAILING</option>
            <option >Mencion de TV Azteca</option>
            <option >PASO DE CALLE</option>
            <option >RECOMENDACION</option>
            <option >RECOVERY</option>
            <option >YOUTUBE</option>
            <option >WHATSAPP</option>
            <option >FACEBOOK MKT</option>
            <option >RADIO KY 94.7 FM</option>
            <option >IMAGEN TV</option>
            <option >PERIODICO EXCELSIOR</option>
          </Select>
        </div>

        <Button className='md:mx-48 mx-28 bg-grey' type='submit'>Enviar</Button>
      </form>
      </div>
    </>
  );
};

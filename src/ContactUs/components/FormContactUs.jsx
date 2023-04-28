import { Button, Label, Select, TextInput } from 'flowbite-react';

export const FormContactUs = () => {
  return (
    <>
      <h2 className='mb-4 text-3xl mt-20 font-semibold text-center leading-none tracking-tight text-gray-700 md:text-4xl lg:text-5xl'>
        Contactanos
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
          <option value="">Seleccione el valor</option>
            <option value='Aguascalientes'>Aguascalientes</option>
            <option value='Baja California&nbsp;Norte'>
              Baja California&nbsp;Norte
            </option>
            <option value='Baja California Sur'>Baja California Sur</option>
            <option value='Campeche'>Campeche</option>
            <option value='CDMX'>CDMX</option>
            <option value='Coahuila'>Coahuila</option>
            <option value='Colima'>Colima</option>
            <option value='Chiapas'>Chiapas</option>
            <option value='Chihuahua'>Chihuahua</option>
            <option value='Durango'>Durango</option>
            <option value='Edo. de Mexico'>Edo. de Mexico</option>
            <option value='Guanajuato'>Guanajuato</option>
            <option value='Guerrero'>Guerrero</option>
            <option value='Hidalgo'>Hidalgo</option>
            <option value='Jalisco'>Jalisco</option>
            <option value='Michoacan'>Michoacan</option>
            <option value='Morelos'>Morelos</option>
            <option value='Nayarit'>Nayarit</option>
            <option value='Nuevo Leon'>Nuevo Leon</option>
            <option value='Oaxaca'>Oaxaca</option>
            <option value='Puebla'>Puebla</option>
            <option value='Queretaro'>Queretaro</option>
            <option value='Quintana Roo'>Quintana Roo</option>
            <option value='San Luis Potosi'>San Luis Potosi</option>
            <option value='Sinaloa'>Sinaloa</option>
            <option value='Sonora'>Sonora</option>
            <option value='Tabasco'>Tabasco</option>
            <option value='Tamaulipas'>Tamaulipas</option>
            <option value='Tlaxcala'>Tlaxcala</option>
            <option value='Veracruz'>Veracruz</option>
            <option value='Yucatan'>Yucatan</option>
            <option value='Zacatecas'>Zacatecas</option>
            <option value='EXTRANJERO'>EXTRANJERO</option>
            <option value='Guadalajara'>Guadalajara</option>
            <option value='Baja California Norte'>Baja California Norte</option>
            <option value='Edo. de M'>Edo. de M</option>
            <option value='Edo.de Mexico'>Edo.de Mexico</option>
            <option value='Baja Calilfornia Norte'>
              Baja Calilfornia Norte
            </option>
            <option value='Jalisico'>Jalisico</option>
            <option value='Quitana Roo'>Quitana Roo</option>
            <option value='Merida'>Merida</option>
            <option value='Hidago'>Hidago</option>
            <option value='Querataro'>Querataro</option>
            <option value='Tuxtla'>Tuxtla</option>
            <option value='Edo.deMexico'>Edo.deMexico</option>
            <option value='Quinatana Roo'>Quinatana Roo</option>
          </Select>
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='public' value='¿Como se entero de nosotros?' />
          </div>
          <Select id='public' required={true}>
            <option value=''>Seleccione el valor</option>
            <option value='100FRANQUICIAS'>100FRANQUICIAS</option>
            <option value='ANUNCIO DE TV AZTECA'>ANUNCIO DE TV AZTECA</option>
            <option value='INSTAGRAM'>INSTAGRAM</option>
            <option value='MULTIMEDIOS'>MULTIMEDIOS</option>
            <option value='EL HERALDO'>EL HERALDO</option>
            <option value='EXPO-MERIDA'>EXPO-MERIDA</option>
            <option value='INTERNET-GOOGLE' selected=''>
              INTERNET-GOOGLE
            </option>
            <option value='FACEBOOK'>FACEBOOK</option>
            <option value='FACEBOOK SHOP'>FACEBOOK SHOP</option>
            <option value='MEDIOS IMPRESOS'>MEDIOS IMPRESOS</option>
            <option value='MAILING'>MAILING</option>
            <option value='Mencion de TV Azteca'>Mencion de TV Azteca</option>
            <option value='PASO DE CALLE'>PASO DE CALLE</option>
            <option value='RECOMENDACION'>RECOMENDACION</option>
            <option value='RECOVERY'>RECOVERY</option>
            <option value='YOUTUBE'>YOUTUBE</option>
            <option value='WHATSAPP'>WHATSAPP</option>
            <option value='FACEBOOK MKT'>FACEBOOK MKT</option>
            <option value='RADIO KY 94.7 FM'>RADIO KY 94.7 FM</option>
            <option value='IMAGEN TV'>IMAGEN TV</option>
            <option value='PERIODICO EXCELSIOR'>PERIODICO EXCELSIOR</option>
          </Select>
        </div>

        <Button className='md:mx-52 mx-28 bg-grey' type='submit'>Enviar</Button>
      </form>
    </>
  );
};

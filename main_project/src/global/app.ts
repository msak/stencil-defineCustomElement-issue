import {setMessage} from 'api';

import {setPlatformOptions} from'lib/dist/components';
import {MyComponent} from'lib/dist/components/my-component'; 
import {MyChild} from'lib/dist/components/my-child'; 

import {defineCustomElements} from '@webmailer/experimentals.custom-elements';


setMessage('SAK');

defineCustomElements(setPlatformOptions, [MyComponent, MyChild], 'wmlist');

export default async () => {

  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

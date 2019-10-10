import React, { Component } from 'react';
import Context from '../../Context';

export default class MyMessages extends Component {
    render() {
          let messages = this.context;

        /* let messages = [{
           subject: "Prueba",
           message: "Prueba del mensaje"
            
       }];*/

        if (!messages) messages = [];

        return (
            <div>
                <h4 className={`ml-2 mb-4`}>Your messages</h4>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>
                                Subject
                        </th>
                            <th>
                                Message
                        </th>
                        </tr>
                        {/*4. Mostrar los mensajes en la tabla a través de una función map*/}
                        {messages.map((msg) => (
                            <tr key={`${msg.subject}-${msg.message}`}>
                                <td>
                                    {msg.subject}
                                </td>
                                <td>
                                    {msg.message}
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        )
    }
}
                    
// 4. Añadir el contextType para que así el componente pueda usar el contexto (MyMessages.contextType...)
MyMessages.contextType = Context
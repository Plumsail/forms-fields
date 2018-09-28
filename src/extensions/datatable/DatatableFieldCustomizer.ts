import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'DatatableFieldCustomizerStrings';
import styles from './DatatableFieldCustomizer.module.scss';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDatatableFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'DatatableFieldCustomizer';

export default class DatatableFieldCustomizer
  extends BaseFieldCustomizer<IDatatableFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated DatatableFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "DatatableFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    event.domElement.classList.add(styles.Datatable);
    if (event.fieldValue) {
        var rows = JSON.parse(event.fieldValue);
        var html = '<table class="table"><tbody>';
        for(var i = 0; i < rows.length; i++){
          html += '<tr>';
          var row = rows[i];
          for(var column in row) {
            html += '<td>';
            html += row[column];
            html += '</td>';
          }
          html += '</tr>';
        }
        html += '</tbody></table>';
        event.domElement.innerHTML = html;
    }
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    super.onDisposeCell(event);
  }
}

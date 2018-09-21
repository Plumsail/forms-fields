## Fields customizers

This repository contains SharePoint Field Customizers for SharePoint Online Modern UI, which allow rendering of Plumsail Forms controls in List View.

You can either download the package of each customizer and use them on your own site or clone the repository, modify code, and build your own Field Customizers based on these examples.

### How to use package?

You need to download the .sppkg file first - https://github.com/Plumsail/forms-fields/raw/master/sharepoint/solution/Plumsail.Fields.sppkg

Upload this file to your App Catalog in SharePoint Admin Center, more about it here - https://docs.microsoft.com/en-us/sharepoint/use-app-catalog

Find and add the new application to your site:

![Add an app](http://plumsail.com/wp-content/customizer-screenshots/add-an-app.png)


Add newly available SPFx column to the List that you want:

![Add SPFx column](http://plumsail.com/wp-content/customizer-screenshots/add-signature.png)


Customize the form for this List, using Forms Windows application, add the control to the form, select the newly added column in SaveTo property:

![Ink Sketch to Signature Field](http://plumsail.com/wp-content/customizer-screenshots/designer-signature.png)


### Signature Field Customizer

Allows display of Ink Sketch control, most commonly used for signatures, inside the List View:

![Ink Sketch List View Example](http://plumsail.com/wp-content/customizer-screenshots/list-signature.png)

# Angular Spacex Graphql Codegen

## Mission

Our goal is to make an Angular app with a list of the past SpaceX launches along with an associated details page. Data is provided via the [SpaceX GraphQL API](https://medium.com/open-graphql/launching-spacex-graphql-api-b3d7029086e0) and Angular services are generated via [GraphQL Code Generator](https://graphql-code-generator.com/). We use [Apollo Angular](https://www.apollographql.com/docs/angular/) to access data from the frontend. The API is free so please be nice and don't abuse it.

### Steps

1. Generate a new angular application with routing

   ```bash
   ng new angular-spacex-graphql-codegen --routing=true --style=css
   ```

   Make sure to delete the default template in `src/app/app.component.html`

1. Install the [Apollo VS Code plugin](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) and in the root of the project add a file `apollo.config.js`

   ```javascript
   module.exports = {
     client: {
       service: {
         name: 'angular-spacex-graphql-codegen',
         url: 'https://api.spacex.land/graphql/'
       }
     }
   };
   ```

   This points the extension at the SpaceX GraphQL API so we get autocomplete when we make our queries among other cool features like type information.

1. Generate our two components:

   ```bash
   ng g component launch-list --changeDetection=OnPush
   ```

   ```bash
   ng g component launch-details --changeDetection=OnPush
   ```

   Because our generated services use observables we choose OnPush change detection for the best performance. We let up them

1. Each component will have its own data requirments so we co-locate our graphql query files next to them

   ```graphql
   # src/app/launch-list/launch-list.graphql

   query pastLaunchesList($limit: Int!) {
     launchesPast(limit: $limit) {
       id
       mission_name
       launch_site {
         site_name_long
       }
       links {
         flickr_images
         mission_patch_small
       }
       rocket {
         rocket_name
       }
       launch_success
       launch_date_utc
     }
   }
   ```

   ```graphql
   # src/app/launch-details/launch-details.graphql

   query launchDetails($id: ID!) {
     launch(id: $id) {
       id
       details
       launch_success
       links {
         flickr_images
         mission_patch
       }
     }
   }
   ```

   Note the first line: `query launchDetails($id: ID!)` When we generate the Angular service the query name is turned into PascalCase and GQL is appended to the end, so the service name for the launch details would be LaunchDetailsGQL. Also in the first line we define any variables we'll need to pass into the query. Please note it's import to include id in the query return so apollo can cache the data.

1. We add [Apollo Angular](https://www.apollographql.com/docs/angular/) to our app with `ng add apollo-angular`. In `src/app/graphql.module.ts` we add our API url `const uri = 'https://api.spacex.land/graphql/';`.

1. Install Graphql Code Generator and the needed plugins `npm i --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-apollo-angular @graphql-codegen/typescript-operations`

1. In the root of the project create a `codegen.yml` file:

   ```yml
   # Where to get schema data
   schema:
     - https://api.spacex.land/graphql/
   # The client side queries to turn into services
   documents:
     - src/**/*.graphql
   # Where to output the services and the list of plugins
   generates:
     ./src/app/services/spacexGraphql.service.ts:
       plugins:
         - typescript
         - typescript-operations
         - typescript-apollo-angular
   ```

1. In package.json add a script `"codegen": "gql-gen"` then `npm run codegen` to generate the Angular Services.

1. To make it look nice we add Angular Material `ng add @angular/material` then in the `app.module.ts` we add the card module `import { MatCardModule } from '@angular/material/card';` and put it in imports.

1. Lets start with the list of past launches displayed on the screen:

# react-mobx-pwa


### dirs
- backend - backend with db (typeorm + postresql), tests (jest), amplitude, access control
- frontend/client - frontend static
- frontend/server - backend for frontend

Can be used as `client + server + backend` / `client + server` / `client + backend`

### 2 options for organizing modules on the client

#### module = page
- container and template `modules/Wish`
- routes `core/Route/locatins`
- store and services `store/Wish`

#### module = entity/site section
- everything that belongs to the section in a separate folder `modules/dream`
- routes `modules/dream/routes`
- containers and templates `modules/dream/ui`
- services `modules/dream/services`
- store `modules/dream/store`


#### folders
- `api` - server interaction
- `components` - simple (don't use store) common components like input, icons etc
- `core` - App render and routes with locations
- `lib` - wrappers for external libs
- `modules/common` - common "not simple" (can use store) components like Page, Header, Navigation
- `modules/*` - app pages
- `store` - app store
- `utils` - useful features

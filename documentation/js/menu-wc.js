'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' :
                                            'id="xs-controllers-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' :
                                        'id="xs-injectables-links-module-AppModule-5197055d96971698d16c445190ff729d2fd91bbc4bedbd81217766410af7ec56c59d8b88fab02b5fd50b1e3c80875d9f0f40048a4d96488b8f6bbb5863481e39"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' :
                                            'id="xs-controllers-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' :
                                        'id="xs-injectables-links-module-AuthModule-c01dd301bb3c4d5e2874fd477e8d80942750d1a2c6828b8ca6f4467ca1a51f63f0145b4e94aaf4ec65df1ed20612aaf79b90065f64638f3d2bc48fb66c484c8e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentModule.html" data-type="entity-link" >ContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' : 'data-bs-target="#xs-controllers-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' :
                                            'id="xs-controllers-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' }>
                                            <li class="link">
                                                <a href="controllers/ContentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' : 'data-bs-target="#xs-injectables-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' :
                                        'id="xs-injectables-links-module-ContentModule-01b09183f5d6c28d6c330de6df27c437b9feadc83246386d488c0942ba80cbf3ad039f72b41a5ae1512a05caf5fb104cb5f6aa6b0b9822142026b5421f4416e2"' }>
                                        <li class="link">
                                            <a href="injectables/ContentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DisciplineModule.html" data-type="entity-link" >DisciplineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' : 'data-bs-target="#xs-controllers-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' :
                                            'id="xs-controllers-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' }>
                                            <li class="link">
                                                <a href="controllers/DisciplineController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisciplineController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' : 'data-bs-target="#xs-injectables-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' :
                                        'id="xs-injectables-links-module-DisciplineModule-76b37e1132a46ec2630bee8d3b6afadcdfca35b9bfc840fc2ee2e258c9028c0cb18299f5bfc934e3585674cc23217bfb0ebdb5cc649597e44c7e9e0f440f8a01"' }>
                                        <li class="link">
                                            <a href="injectables/DisciplineService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisciplineService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' : 'data-bs-target="#xs-controllers-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' :
                                            'id="xs-controllers-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' : 'data-bs-target="#xs-injectables-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' :
                                        'id="xs-injectables-links-module-UserModule-ab57f5777bda070cc43d7981db5c9c94a8008c61f41775eb11c3bb2dfcf985e05852c7901dbbaaff5be1339342c79c5a24fb762f75effda0be5920b7d0af91d8"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContentController.html" data-type="entity-link" >ContentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DisciplineController.html" data-type="entity-link" >DisciplineController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Content.html" data-type="entity-link" >Content</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateContentDto.html" data-type="entity-link" >CreateContentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDisciplineDto.html" data-type="entity-link" >CreateDisciplineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Discipline.html" data-type="entity-link" >Discipline</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingInUserDto.html" data-type="entity-link" >SingInUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerBadRequestResponse.html" data-type="entity-link" >SwaggerBadRequestResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerConflictResponse.html" data-type="entity-link" >SwaggerConflictResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerNotFoundResponse.html" data-type="entity-link" >SwaggerNotFoundResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateContentDto.html" data-type="entity-link" >UpdateContentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDisciplineDto.html" data-type="entity-link" >UpdateDisciplineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentService.html" data-type="entity-link" >ContentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DisciplineService.html" data-type="entity-link" >DisciplineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
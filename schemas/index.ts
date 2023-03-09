import profile from "./profile";
import home from "./Pages/home";
import why from "./Pages/why";
import component from "./Objects/component";
import accessibleImage from "./Objects/accessibleImage";
import icon from "./Objects/icon";

export const singletonSchemas = [
    { typeName: 'home', title: 'Accueil' },
    { typeName: 'why', title: 'Pourquoi' },
];

export const singletonTypes = new Set(singletonSchemas.map(s => s.typeName));
export const schemaTypes = [home, why, profile, component, accessibleImage, icon];

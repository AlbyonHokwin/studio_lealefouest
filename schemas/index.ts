import profile from "./profile";
import home from "./Pages/home";
import why from "./Pages/why";
import solution from "./Pages/solution";
import component from "./Objects/component";
import accessibleImage from "./Objects/accessibleImage";
import icon from "./Objects/icon";
import textWithStrong from "./Objects/textWithStrong";
import textWithEmphasis from "./Objects/textWithEmphasis";

type Schema = {
    typeName: string;
    title: string;
}

export const singletonSchemas: Schema[] = [
    { typeName: 'home', title: 'Accueil' },
    { typeName: 'why', title: 'Pourquoi' },
    { typeName: 'solution', title: 'Solution' },
];

export const documentSchemas: Schema[] = [
    { typeName: 'profile', title: 'Profil' },
    { typeName: 'component', title: 'Composant' },
    { typeName: 'accessibleImage', title: 'Image' },
    { typeName: 'icon', title: 'Icône' },
];

export const singletonTypes = new Set(singletonSchemas.map(s => s.typeName));
export const schemaTypes = [home, why, solution, profile, component, accessibleImage, icon, textWithStrong, textWithEmphasis];

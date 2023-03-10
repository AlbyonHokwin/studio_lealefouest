import profile from "./profile";
import home from "./Pages/home";
import why from "./Pages/why";
import solution from "./Pages/solution";
import methodology from "./Pages/methodology";
import pricing from "./Pages/pricing";
import expectation from "./Pages/expectation";
import contact from "./Pages/contact";
import otherMedia from "./Pages/otherMedia";
import component from "./Objects/component";
import accessibleImage from "./Objects/accessibleImage";
import icon from "./Objects/icon";
import comment from "./Objects/comment";
import textWithStrong from "./Objects/textWithStrong";
import textWithEmphasis from "./Objects/textWithEmphasis";
import media from "./Objects/media";

type Schema = {
    typeName: string;
    title: string;
}

export const singletonSchemas: Schema[] = [
    { typeName: 'home', title: 'Accueil' },
    { typeName: 'why', title: 'Pourquoi' },
    { typeName: 'solution', title: 'Solution' },
    { typeName: 'methodology', title: 'Méthode' },
    { typeName: 'pricing', title: 'Tarif' },
    { typeName: 'expectation', title: 'Attente' },
    { typeName: 'contact', title: 'Contact' },
    { typeName: 'otherMedia', title: 'Autre média' },
];

export const documentSchemas: Schema[] = [
    { typeName: 'profile', title: 'Profil' },
    { typeName: 'component', title: 'Composant' },
    { typeName: 'accessibleImage', title: 'Image' },
    { typeName: 'icon', title: 'Icône' },
    { typeName: 'comment', title: 'Commentaire' },
];

export const singletonTypes = new Set(singletonSchemas.map(s => s.typeName));
export const schemaTypes = [home, why, solution, methodology, pricing, expectation, contact, otherMedia, profile, component, accessibleImage, icon, comment, textWithStrong, textWithEmphasis, media];

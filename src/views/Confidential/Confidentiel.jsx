import React from 'react';
import { Footer } from '../../components/Footer';

export const Confidentiel = () => {
    return (
        <>

            <div className='mt-8 px-4 lg:px-32 py-8 flex justify-center'>
                <div className='lg:w-10/12'>
                    <h1 className='text-5xl font-extrabold'>
                        Politique de Confidentialité de Treiize Taxi
                    </h1>
                    <p className='mt-8'>
                        La protection de votre vie privée est importante pour Treiize Taxi. Cette politique de confidentialité explique comment nous collectons,
                        utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
                    </p>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Informations Personnelles Collectées</h1>
                        <p className='mt-2'>
                            Nous pouvons collecter les informations suivantes lorsque vous utilisez nos services :
                            Informations de contact telles que votre nom, adresse e-mail et numéro de téléphone.
                            Informations de paiement telles que les détails de votre carte de crédit.
                            Informations sur vos commandes de taxi, y compris les lieux de prise en charge et de dépose.
                            Informations de localisation lorsque vous utilisez notre application mobile.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Utilisation des Informations</h1>
                        <p className='mt-2'>
                            Nous utilisons vos informations personnelles pour :
                            Traiter vos commandes de taxi et vous fournir nos services.
                            Communiquer avec vous concernant votre compte et vos commandes.
                            Améliorer et personnaliser votre expérience utilisateur.
                            Analyser les tendances d'utilisation et améliorer nos services.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Partage des Informations</h1>
                        <p className='mt-2'>
                            Nous ne partagerons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
                            Avec des fournisseurs de services tiers qui nous aident à fournir nos services.
                            Si requis par la loi ou pour protéger nos droits légaux.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Sécurité des Informations</h1>
                        <p className='mt-2'>
                            Nous prenons des mesures pour protéger vos informations personnelles contre tout accès, utilisation ou divulgation non autorisés.
                            Les informations de paiement sont traitées via des méthodes sécurisées et ne sont pas stockées sur nos serveurs.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Limitation de Responsabilité</h1>
                        <p className='mt-2'>
                            Nous nous efforçons de fournir des services fiables, mais nous ne pouvons garantir l'exactitude ou la disponibilité à tout moment.
                            En aucun cas, Treiize Taxi ne sera responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation de nos services.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Consentement</h1>
                        <p className='mt-2'>
                            En utilisant nos services, vous consentez à la collecte, à l'utilisation et au partage de vos informations personnelles comme décrit dans cette politique de confidentialité.                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

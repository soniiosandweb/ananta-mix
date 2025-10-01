import React from "react";
import { Helmet } from "react-helmet-async";

const MetaData = ({title, description, canonicalUrl}) => {
    return(
        <Helmet>
            <title>{title}</title>
            {description && (
               <meta
                    name="description"
                    content={description}
                /> 
            )}

            {canonicalUrl &&
                <link rel="canonical" href={canonicalUrl ? canonicalUrl : process.env.REACT_APP_API_URL } />
            }
            
        </Helmet>
    )
}

export default MetaData
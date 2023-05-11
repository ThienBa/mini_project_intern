import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function ReadMoreDescription({ description }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const { t } = useTranslation()
    const maxDescriptionLength = 1500

    function toggleExpansion() {
        setIsExpanded(!isExpanded)
    }

    function getLimitedDescription() {
        if (description.length > maxDescriptionLength)
            return description.substring(0, maxDescriptionLength) + '...'
        else
            return description.substring(0, maxDescriptionLength)
    }

    function getDescription() {
        return isExpanded ? description : getLimitedDescription()
    }

    return (
        <>
            <div className="leading-relaxed text-justify light-white ql-editor" dangerouslySetInnerHTML={{ __html: getDescription() }}></div>
            {description.length > maxDescriptionLength &&
                <div className="text-center">
                    <button
                        className="mt-4 border border-blue-300 rounded-lg px-5 py-2 text-blue-300 focus:outline-none"
                        onClick={toggleExpansion}
                    >
                        {isExpanded ? t("read_less") : t('read_more')}
                    </button>
                </div>
            }
        </>
    )
}

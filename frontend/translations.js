const translations = {
    'fr-FR': {
        ui: {
            title: 'ALEXIA - Assistant Vocal Multilingue',
            startButton: 'Commencer l\'enregistrement',
            stopButton: 'Arrêter l\'enregistrement',
            transcribeAudio: 'Transcrire l\'audio',
            transcribeAudioMobile: '📝 Transcription',
            transcribingAudio: 'Transcription…',
            downloadAudio: 'Télécharger l\'audio',
            downloadReport: 'Télécharger le rapport (HTML)',
            downloadReportPdf: 'Exporter en PDF',
            settings: 'Paramètres',
            practice: 'Exercices',
            stats: 'Statistiques',
            translateButton: 'Traduire',
            autoTranslate: 'Traduction automatique',
            translationPlaceholder: '[Zone de traduction]'
        },
        metrics: {
            speechRate: 'Vitesse de parole',
            emotion: 'Émotion détectée',
            clarity: 'Clarté',
            engagement: 'Engagement',
            wordsPerMinute: 'mots/minute',
            tone: 'Ton',
            pauses: 'Pauses',
            hesitations: 'Hésitations',
            vitesse: 'Vitesse',
            clarte: 'Clarté'
        },
        feedback: {
            tooFast: 'Essayez de parler un peu plus lentement',
            tooSlow: 'Vous pourriez augmenter légèrement votre débit',
            goodPace: 'Votre rythme est bon',
            useMorePauses: 'Ajoutez quelques pauses stratégiques',
            reducePauses: 'Essayez de réduire les pauses',
            goodStructure: 'Votre discours est bien structuré'
        },
        report: {
            date: 'Date',
            duration: 'Durée',
            sourceLanguage: 'Langue source',
            metrics: 'Métriques',
            transcription: 'Transcription',
            originalText: 'Texte original',
            translation: 'Traduction',
            reportTitle: 'Rapport d\'analyse vocale'
        }
    },
    'fon-BJ': {
        ui: {
            title: 'ALEXIA - Gbè Tunwun Tɔn',
            startButton: 'Bɛ jɛ gbè yí jí',
            stopButton: 'Gbɔ gbè yíyí',
            transcribeAudio: 'Gbè ɖó wěma',
            transcribeAudioMobile: '📝 Wěma',
            transcribingAudio: 'Wěma yí…',
            downloadAudio: 'Sɔ gbè ɖó',
            downloadReport: 'Sɔ wěma ɖó',
            settings: 'Tìtò lɛ̌',
            practice: 'Mɛ plɛnplɛn',
            stats: 'Nùxokplɔn lɛ̌',
            translateButton: 'Gbè ɖěvo',
            autoTranslate: 'Gbè ɖěvo ɖó',
            translationPlaceholder: '[Gbè ɖěvo ɖó]'
        },
        metrics: {
            speechRate: 'Gbè yíyí sín kpínkpɔn',
            emotion: 'Ayixa ɖé ɖò',
            clarity: 'Gbè sísí',
            engagement: 'Nùɖéɖé',
            wordsPerMinute: 'xó/hwe cɛ́',
            tone: 'Gbè sín kpákpá',
            pauses: 'Gbɔ́ɖókpɔ́',
            hesitations: 'Nùflɛ́',
            vitesse: 'Gbè yíyí sín kpínkpɔn',
            clarte: 'Gbè sísí'
        },
        feedback: {
            tooFast: 'Mi ɖó ná dó gbè bléblé',
            tooSlow: 'Mi ɖó ná dó gbè kpɛví kpɛví',
            goodPace: 'Gbè mítɔn nyɔ́',
            useMorePauses: 'Mi ná gbɔ́ɖó kpɔ́n',
            reducePauses: 'Mi ná dó gbè bɔ é má ná gbɔ́ɖó ǎ',
            goodStructure: 'Gbè mítɔn ɖó titó nyɔ́'
        },
        report: {
            date: 'Azǎn',
            duration: 'Gǎn',
            sourceLanguage: 'Gbè',
            metrics: 'Nùxokplɔn lɛ̌',
            transcription: 'Wěma',
            originalText: 'Gbè ɖaxó',
            translation: 'Gbè ɖěvo',
            reportTitle: 'Wěma Gbè Tunwun Tɔn'
        }
    },
    'en-US': {
        ui: {
            title: 'ALEXIA - Multilingual Voice Assistant',
            startButton: 'Start Recording',
            stopButton: 'Stop Recording',
            transcribeAudio: 'Transcribe Audio',
            transcribeAudioMobile: '📝 Transcription',
            transcribingAudio: 'Transcribing…',
            downloadAudio: 'Download Audio',
            downloadReport: 'Download Report',
            settings: 'Settings',
            practice: 'Practice',
            stats: 'Statistics',
            translateButton: 'Translate',
            autoTranslate: 'Auto-translate',
            translationPlaceholder: '[Translation area]'
        },
        metrics: {
            speechRate: 'Speech Rate',
            emotion: 'Detected Emotion',
            clarity: 'Clarity',
            engagement: 'Engagement',
            wordsPerMinute: 'words/minute',
            tone: 'Tone',
            pauses: 'Pauses',
            hesitations: 'Hesitations',
            vitesse: 'Speed',
            clarte: 'Clarity'
        },
        feedback: {
            tooFast: 'Try speaking a bit slower',
            tooSlow: 'You could increase your pace slightly',
            goodPace: 'Your pace is good',
            useMorePauses: 'Add some strategic pauses',
            reducePauses: 'Try to reduce pauses',
            goodStructure: 'Your speech is well structured'
        },
        report: {
            date: 'Date',
            duration: 'Duration',
            sourceLanguage: 'Source Language',
            metrics: 'Metrics',
            transcription: 'Transcription',
            originalText: 'Original Text',
            translation: 'Translation',
            reportTitle: 'Voice Analysis Report'
        }
    },
    'wo-SN': {
        ui: {
            title: 'ALEXIA — Taxawu laaj ci làkk',
            speechLanguage: 'Làkk bu wax:',
            autoStop: 'Tax boppam ci 2 simili',
            languageSupport: 'Jëkk-jëkk ci làkk',
            dialectInfo: 'Fataat: Wolof',
            startButton: 'Tàmbali waxtaan',
            stopButton: 'Tax waxtaan bi',
            transcribeAudio: 'Bindi wax ji API',
            transcribeAudioMobile: '📝 Bindi wax',
            transcribingAudio: 'Dina bind…',
            downloadAudio: 'Yeb wax bi',
            downloadReport: 'Yeb rapport (HTML)',
            downloadReportPdf: 'Yeb ci PDF',
            settings: 'Tànneef yi',
            practice: 'Jàngoro yi',
            stats: 'Lim yi',
            translateButton: 'Soppi làkk',
            autoTranslate: 'Soppi làkk boppam',
            translationPlaceholder: '[Bër soppi làkk]',
            voiceAnalysis: 'Topp ci wax',
            suggestions: 'Taan',
            defaultSuggestion: 'Taan yi di fees ci ndax wax ji…',
            transcription: 'Bind'
        },
        metrics: {
            speechRate: 'Yoon ci wax',
            emotion: 'Xalaat bu am',
            clarity: 'Leeral',
            engagement: 'Jàppante',
            wordsPerMinute: 'Ci waxtu bu njëkk',
            tone: 'Ton',
            pauses: 'Tax yi',
            hesitations: 'Doute yi',
            vitesse: 'Yoon',
            clarte: 'Leeral'
        },
        feedback: {
            tooFast: 'Loolu waxul yomb; yàggal tuuti.',
            tooSlow: 'Mën nga yëkkati yoon bi tuuti.',
            goodPace: 'Yoon bi baax na.',
            useMorePauses: 'Yokk tax yu am soloŋ.',
            reducePauses: 'Yëkkati tax yi su fekkee moom.',
            goodStructure: 'Wax ji baax na ci ton.'
        },
        report: {
            date: 'Bés',
            duration: 'Guddi',
            sourceLanguage: 'Làkk wu jëkk',
            metrics: 'Lim yi',
            transcription: 'Bind',
            originalText: 'Mbind mi jëkk',
            translation: 'Soppi làkk',
            reportTitle: 'Rapport ci wax ji'
        }
    },
    'ee-GH': {
        ui: {
            title: 'ALEXIA — Gbeɖiɖi dzi nu gble la',
            speechLanguage: 'Gbe:',
            autoStop: 'Tu la ɖe eɖokui le simeli 2 me',
            languageSupport: 'Gbe ƒe kpekpeɖeŋu',
            dialectInfo: 'Gbeƒã: Éwé (Ghana)',
            startButton: 'Dze gbleɖiɖi gome',
            stopButton: 'Tu gbleɖiɖi me',
            transcribeAudio: 'Ŋlɔ gbleɖiɖi la dzi API dzi',
            transcribeAudioMobile: '📝 Ŋlɔ gbleɖiɖi la',
            transcribingAudio: 'Wɔm ŋlɔm…',
            downloadAudio: 'Lɔ̃ gbleɖiɖi la',
            downloadReport: 'Lɔ̃ nyatakaka (HTML)',
            downloadReportPdf: 'Ðo to PDF',
            settings: 'Ðoɖowo',
            practice: 'Ðoɖoɖowo',
            stats: 'Nɔnɔmetowo',
            translateButton: 'Tɔ gbe',
            autoTranslate: 'Tɔ gbe la ɖe eɖokui',
            translationPlaceholder: '[Nu tɔ gbe la]',
            voiceAnalysis: 'Ɣloyiɖiɖi gbleɖiɖi',
            suggestions: 'Nuɖiɖi',
            defaultSuggestion: 'Nuɖiɖiwo aɖe li afi le gbleɖiɖi me…',
            transcription: 'Ŋlɔnuto'
        },
        metrics: {
            speechRate: 'Gbleɖiɖi ƒe didi',
            emotion: 'Dzidzɔ si le',
            clarity: 'Nuɖiɖi',
            engagement: 'Kpekpeɖeŋu',
            wordsPerMinute: 'ŋkɔwo/gaɖi',
            tone: 'Gbleɖiɖi ƒe didi',
            pauses: 'Ðoɖowo',
            hesitations: 'Vɔvɔ̃wo',
            vitesse: 'Dididɔwɔwɔ',
            clarte: 'Nuɖiɖi'
        },
        feedback: {
            tooFast: 'Trɔ asi le gbleɖiɖi me vevie.',
            tooSlow: 'Ðo didi aɖe nu.',
            goodPace: 'Didi la nyuie.',
            useMorePauses: 'Li ðoɖowo aɖe si nyo.',
            reducePauses: 'Ðo ðoɖowo aɖe nu.',
            goodStructure: 'Nu gble la de blibo.'
        },
        report: {
            date: 'Ŋkeke',
            duration: 'Gaɖi',
            sourceLanguage: 'Gbe si tso',
            metrics: 'Nɔnɔmetowo',
            transcription: 'Ŋlɔnuto',
            originalText: 'Ŋlɔnuto si tso',
            translation: 'Gbe si wɔ tɔ',
            reportTitle: 'Nyatakaka gbleɖiɖi ƒe'
        }
    },
    'tw-GH': {
        ui: {
            title: 'ALEXIA — Kasakasa adanseɛ dubɔfo',
            speechLanguage: 'Kasa a wɔde:',
            autoStop: 'Gyae ankasa bere simma 2 mu',
            languageSupport: 'Kasa no ho banbɔ',
            dialectInfo: 'Kasa: Twi (Ghana)',
            startButton: 'Hyɛ ato a sen',
            stopButton: 'Gyae sen no',
            transcribeAudio: 'Kyɛwerɛ nea wɔka no (API)',
            transcribeAudioMobile: '📝 Kyɛwerɛ',
            transcribingAudio: 'Ɛreyɛ kyɛwerɛ…',
            downloadAudio: 'Download nea wɔte no',
            downloadReport: 'Download adanseɛ (HTML)',
            downloadReportPdf: 'Export ma PDF',
            translateButton: 'Kyɛ kasa',
            autoTranslate: 'Kyɛ kasa ankasa',
            translationPlaceholder: '[Bea a wɔbɛkyɛ kasa]',
            settings: 'Nhyehyɛe',
            practice: 'Adwumaden',
            stats: 'Nkanee',
            voiceAnalysis: 'Kasa adwene',
            suggestions: 'Adwene',
            defaultSuggestion: 'Adwene no bɛba ha bere a wore kasa…',
            transcription: 'Kyɛwerɛ'
        },
        metrics: {
            speechRate: 'Kasa bere',
            emotion: 'Ahometew',
            clarity: 'Kasa a ɛda adi mu',
            engagement: 'Ahɔhare',
            wordsPerMinute: 'nsɛm/nna',
            tone: 'Kasa bere',
            pauses: 'Home',
            hesitations: 'Ahintasintasibo',
            vitesse: 'Bere',
            clarte: 'Kasa a ɛda adi mu'
        },
        feedback: {
            tooFast: 'Bɔ mmɔden ka brɛoo.',
            tooSlow: 'Bɛtumi de bere no kakra.',
            goodPace: 'Bere no yɛ.',
            useMorePauses: 'Fa home bi ka ho hia.',
            reducePauses: 'Bɔ mmɔden sɛnea wobɛte home no ase.',
            goodStructure: 'Wo kasa no asi yiye.'
        },
        report: {
            date: 'Da',
            duration: 'Bere',
            sourceLanguage: 'Kasa a ɛfirii',
            metrics: 'Nkanee',
            transcription: 'Kyɛwerɛ',
            originalText: 'Nea wɔkyerɛw no',
            translation: 'Kasa a wɔakyɛ no',
            reportTitle: 'Kasa adanseɛ krataa'
        }
    }
};

class TranslationManager {
    constructor() {
        this.currentLanguage = 'fr-FR';
        this.fallbackLanguage = 'en-US';
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            this.updateUILanguage();
            return true;
        }
        return false;
    }

    translate(key, category = 'ui') {
        const langData = translations[this.currentLanguage] || translations[this.fallbackLanguage];
        const categoryData = langData[category];
        return categoryData[key] || key;
    }

    updateUILanguage() {
        // Mettre à jour tous les éléments de l'interface
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const category = element.getAttribute('data-translate-category') || 'ui';
            element.textContent = this.translate(key, category);
        });

        // Mettre à jour le titre de la page
        document.title = this.translate('title');

        // Mettre à jour la direction du texte pour les langues RTL
        document.documentElement.dir = this.isRTL(this.currentLanguage) ? 'rtl' : 'ltr';
    }

    isRTL(language) {
        const rtlLanguages = ['ar', 'he', 'fa'];
        return rtlLanguages.includes(language.split('-')[0]);
    }

    getAvailableLanguages() {
        return Object.keys(translations).map(lang => ({
            code: lang,
            name: this.getLanguageName(lang)
        }));
    }

    getLanguageName(langCode) {
        const languageNames = {
            'fr-FR': 'Français',
            'en-US': 'English',
            'fon-BJ': 'Fongbè',
            'wo-SN': 'Wolof',
            'ee-GH': 'Éwé (Ghana)',
            'tw-GH': 'Twi (Ghana)'
        };
        return languageNames[langCode] || langCode;
    }
}

// Export pour utilisation dans d'autres fichiers
window.TranslationManager = TranslationManager;
window.translations = translations; 
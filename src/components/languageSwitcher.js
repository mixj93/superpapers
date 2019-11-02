import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

const languages = [{ code: 'en', label: 'English' }, { code: 'zh', label: '中文' }]

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(language) {
    const { i18n } = this.props
    i18n.changeLanguage(language)
  }

  render() {
    const currentLang = this.state.language

    return (
      <div className="language-switcher">
        {languages.map((language, i) => {
          if (language.code === currentLang) {
            return (
              <React.Fragment key={language.code}>
                <span className="current">{language.label}</span>
                {i < languages.length - 1 && <span className="divider">|</span>}
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={language.code}>
                <button onClick={() => this.handleChangeLanguage(language.code)}>{language.label}</button>
                {i < languages.length - 1 && <span className="divider">|</span>}
              </React.Fragment>
            )
          }
        })}
      </div>
    )
  }
}

export default withTranslation()(LanguageSwitcher)

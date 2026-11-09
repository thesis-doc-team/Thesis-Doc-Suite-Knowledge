(function () {
  if (typeof mermaid === 'undefined') return;
  mermaid.initialize({
    startOnLoad: true,
    theme: 'neutral',
    securityLevel: 'loose',
    themeVariables: {
      primaryColor: '#eff6ff',
      primaryBorderColor: '#2563eb',
      primaryTextColor: '#0f172a',
      lineColor: '#94a3b8',
      secondaryColor: '#f5f3ff',
      tertiaryColor: '#f0fdfa',
      noteBkgColor: '#ffffff',
      noteBorderColor: '#e2e8f0',
      noteTextColor: '#0f172a',
      actorBkg: '#ffffff',
      actorBorder: '#2563eb',
      actorTextColor: '#0f172a',
      signalColor: '#0f172a',
      signalTextColor: '#0f172a',
      labelBoxBkgColor: '#eff6ff',
      labelBoxBorderColor: '#2563eb',
      labelTextColor: '#0f172a',
      loopTextColor: '#0f172a',
      activationBkgColor: '#dbeafe',
      activationBorderColor: '#2563eb',
      sequenceNumberColor: '#ffffff',
      fontFamily: "'Outfit', 'PingFang SC', 'Microsoft YaHei', sans-serif",
      fontSize: '14px'
    }
  });
})();

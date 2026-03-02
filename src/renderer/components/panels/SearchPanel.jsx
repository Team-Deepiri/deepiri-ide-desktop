import React, { useState, useMemo } from 'react';

export default function SearchPanel({ openTabs, activeTabContent, activeTabName, onSelectTab }) {
  const [query, setQuery] = useState('');
  const [replace, setReplace] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [results, setResults] = useState([]);

  const searchInOpenTabs = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = caseSensitive ? query : query.toLowerCase();
    const reg = wholeWord ? new RegExp(`\\b${escapeRe(q)}\\b`, caseSensitive ? 'g' : 'gi') : new RegExp(escapeRe(q), caseSensitive ? 'g' : 'gi');
    const out = [];
    openTabs.forEach((tab) => {
      const content = tab.content || '';
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        let match;
        const lineToSearch = caseSensitive ? line : line.toLowerCase();
        const re = wholeWord ? new RegExp(`\\b${escapeRe(q)}\\b`, caseSensitive ? 'g' : 'gi') : new RegExp(escapeRe(q), caseSensitive ? 'g' : 'gi');
        while ((match = re.exec(line)) !== null) {
          out.push({
            tabId: tab.id,
            path: tab.path,
            name: tab.name,
            line: i + 1,
            column: match.index + 1,
            text: line.trim().slice(0, 80)
          });
        }
      });
    });
    setResults(out);
  };

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  return (
    <div className="search-panel">
      <div className="search-header">
        <input
          type="text"
          className="search-input"
          placeholder="Search in open files"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchInOpenTabs()}
        />
        <button type="button" className="btn-primary" onClick={searchInOpenTabs}>
          Search
        </button>
      </div>
      <div className="search-options">
        <label>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          Match case
        </label>
        <label>
          <input
            type="checkbox"
            checked={wholeWord}
            onChange={(e) => setWholeWord(e.target.checked)}
          />
          Whole word
        </label>
      </div>
      <div className="search-results">
        {results.length === 0 && query && (
          <div className="search-no-results">No results</div>
        )}
        {results.length > 0 && (
          <div className="search-result-count">{results.length} result(s)</div>
        )}
        {results.slice(0, 200).map((r, i) => (
          <div
            key={`${r.tabId}-${r.line}-${i}`}
            className="search-result-item"
            onClick={() => onSelectTab && onSelectTab(r.tabId, r.line)}
          >
            <span className="result-file">{r.name}:{r.line}</span>
            <span className="result-preview">{r.text}</span>
          </div>
        ))}
        {results.length > 200 && (
          <div className="search-more">… and {results.length - 200} more</div>
        )}
      </div>
    </div>
  );
}

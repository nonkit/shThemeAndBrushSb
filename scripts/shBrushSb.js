/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 * Copyright (C) 2017 Nonki Takahashi.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'Else ElseIf EndFor EndIf EndSub EndWhile ' +
						'For Goto If Step Sub Then To While';

		var objects =	'Array Clock Control Desktop Dictionary ' +
						'File Flickr GraphicsWindow ImageList Math Mouse ' +
						'Network Program Shapes Sound Stack ' +
						'Text TextWindow Timer Turtle' +
						'KinectBodyList KinectFaceList KinectWindow ' +
						'LD3DView LDArray LDBits LDBlueTooth ' +
						'LDCall LDChart LDClient LDClipboard LDColours ' +
						'LDCommPort LDController LDControls LDCursors ' +
						'LDDataBase LDDateTime LDDebug LDDialogs LDDictionary ' +
						'LDEffect LDEmail LDEncryption LDEvents ' +
						'LDFastArray LDFastShapes LDFigures ' +
						'LDFile LDFocus LDftp LDGraph LDGraphicsWindow ' +
						'LDHID LDImage LDInline LDIOWarrior LDList LDLogic ' +
						'LDMath LDMathX LDMatrix LDMusic LDNetwork ' +
						'LDPhysics LDProcess LDQueue LDRegex LDResources ' +
						'LDScrollBars LDSearch LDServer LDSettings LDShapes ' +
						'LDShell LDSort LDSound LDSpeech LDStatistics LDStopwatch ' +
						'LDText LDTextWindow LDTimer LDTranslate ' +
						'LDUnits LDUtilities LDVector ' +
						'LDWaveForm LDWebCam LDWindows LDxml LDZip';

		this.regexList = [
			{ regex: /'.*$/gm,										css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },		// strings
			{ regex: new RegExp(this.getKeywords(keywords), 'g'),	css: 'keyword' },		// sb keyword
			{ regex: /(\b\d+[\.]?\d*\b|\.\d+\b)/g,					css: 'value' },   		// sb number
			{ regex: /And|Or|\+|\-|\*|\/|&lt;|=|>|\(|\)|\.|\,/g,	css: 'color1' },		// sb operator
			{ regex: new RegExp(this.getKeywords(objects), 'g'),	css: 'constants' },		// sb object
			{ regex: /\.\b\w+\b/g,									css: 'preprocessor' }	// sb property,operation,event
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sb', 'smallbasic'];

	SyntaxHighlighter.brushes.Sb = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

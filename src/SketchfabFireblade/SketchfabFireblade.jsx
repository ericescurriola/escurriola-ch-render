import React from 'react';
import './SketchfabFireblade.css'; // Optional: Für CSS-Styling

const SketchfabFireblade = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="MY24_CBR1000RR - CPicker"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
      //Original
      //src="https://sketchfab.com/models/132d2bbb7de440ab95836295ad5f1714/embed?autospin=0.3&autostart=1&preload=1&transparent=1&ui_animations=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
      //src="https://sketchfab.com/models/132d2bbb7de440ab95836295ad5f1714/embed?api_version=1.12.1&api_id=1&annotations_visible=0&autostart=1&camera=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_loading=0&ui_stop=0&ui_watermark=0&ui_fullscreen=0&ui_help=0&ui_settings=0&ui_sound=0&ui_start=0&ui_hint=0&ui_vr=0&ui_watermark_link=0&ui_ar=0&ui_ar_help=0&ui_ar_qrcode=0&animation_autoplay=0&ui_theme=dark"
      //v1
      src="https://sketchfab.com/models/132d2bbb7de440ab95836295ad5f1714/embed?api_version=1.12.1&api_id=1&annotations_visible=0&transparent=1&autospin=0.3&autostart=1&camera=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_loading=0&ui_stop=0&ui_watermark=0&ui_fullscreen=0&ui_help=0&ui_settings=0&ui_sound=0&ui_start=0&ui_hint=0&ui_vr=0&ui_watermark_link=0&ui_ar=0&ui_ar_help=0&ui_ar_qrcode=0&animation_autoplay=0&ui_theme=dark&annotation_tooltip_visible=0"  
      />
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/my24-cbr1000rr-cpicker-132d2bbb7de440ab95836295ad5f1714?utm_medium=embed&utm_campaign=share-popup&utm_content=132d2bbb7de440ab95836295ad5f1714"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          MY24_CBR1000RR - CPicker
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/INDG?utm_medium=embed&utm_campaign=share-popup&utm_content=132d2bbb7de440ab95836295ad5f1714"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          INDG
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=132d2bbb7de440ab95836295ad5f1714"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabFireblade;
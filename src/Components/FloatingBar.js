import React, { useState } from 'react';

function FloatingBar() {
    return (
      <div style={{ position: 'fixed', bottom: 20, right: 20, background: 'rgba(0, 0, 0, 0.8)', color: '#fff', padding: '10px 20px', borderRadius: 5 }}>
        This is a floating bar or message pane.
      </div>
    );
  }
  
 
  
  export default FloatingBar;
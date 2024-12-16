// ResumeDocument.js
import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';

const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Katammagari Kesava</Text>
        <Text style={{ fontSize: 18 }}>Frontend Developer</Text>
        {/* Add more details as needed */}
        <Text style={{ marginTop: 20 }}>Education:</Text>
        <Text>BTech in Computer Science</Text>
        <Text>Rajiv Gandhi University of Knowledge Technologies</Text>
        {/* Add more details as needed */}
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;

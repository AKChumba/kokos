import { describe, expect, it } from 'vitest';
import { buildContactMailtoLink, buildFormspreePayload, generateFriendlyReference } from './contactUtils';

describe('buildContactMailtoLink', () => {
  it('builds a mailto link with the submitted contact details', () => {
    const url = buildContactMailtoLink({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+264811234567',
      subject: 'Security Audit',
      message: 'Please help us review our systems.',
    });

    expect(url).toContain('mailto:contact@futuretechafrica.com');
    expect(url).toContain('Security%20Audit');
    expect(url).toContain('Jane%20Doe');
    expect(url).toContain('jane%40example.com');
    expect(url).toContain('Please%20help%20us%20review%20our%20systems.');
  });

  it('builds the payload expected by Formspree', () => {
    expect(buildFormspreePayload({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+264811234567',
      subject: 'Security Audit',
      message: 'Please help us review our systems.',
    })).toEqual({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+264811234567',
      subject: 'Security Audit',
      message: 'Please help us review our systems.',
    });
  });

  it('generates a readable contact reference', () => {
    const ref = generateFriendlyReference();
    expect(ref).toMatch(/^CONTACT-\d{8}-\d{4}$/);
  });
});

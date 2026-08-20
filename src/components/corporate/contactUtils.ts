export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const generateFriendlyReference = (prefix = 'CONTACT') => {
  const now = new Date();
  const stamp = now.toISOString().slice(0, 10).replace(/-/g, '');
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${stamp}-${suffix}`;
};

export const buildContactMailtoLink = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormPayload) => {
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const subjectParam = encodeURIComponent(`New enquiry: ${subject}`);
  const bodyParam = encodeURIComponent(body);

  return `mailto:contact@futuretechafrica.com?subject=${subjectParam}&body=${bodyParam}`;
};

export const buildFormspreePayload = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormPayload) => ({
  name,
  email,
  phone: phone || '',
  subject,
  message,
});

export const submitContactToFormspree = async (endpoint: string, data: ContactFormPayload) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildFormspreePayload(data)),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(responseText || 'Formspree submission failed');
  }

  try {
    return JSON.parse(responseText);
  } catch {
    return responseText;
  }
};

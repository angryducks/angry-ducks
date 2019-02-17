#!/usr/bin/env python
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
from google.oauth2 import service_account
import sys
import setting


def detect_sentiment(text):
    credentials = service_account.Credentials.from_service_account_file(
    setting.GOOGLE_API)
    credentials = credentials.with_scopes(
        ['https://www.googleapis.com/auth/cloud-platform'])
    client = language.LanguageServiceClient(credentials=credentials)

    document = types.Document(
        content=text,
        type=enums.Document.Type.PLAIN_TEXT)

    # Detects the sentiment of the text
    sentiment = client.analyze_sentiment(document=document).document_sentiment

    print('Text: {}'.format(text))
    print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))
    return sentiment


if __name__ == '__main__':
    if len(sys.argv) == 2:
        detect_sentiment(sys.argv[1])
    else:
        print("Please provide text to detect sentiment.")

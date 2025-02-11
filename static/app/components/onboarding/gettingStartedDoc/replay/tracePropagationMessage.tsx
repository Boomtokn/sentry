import styled from '@emotion/styled';

import {Alert} from 'sentry/components/alert';
import ExternalLink from 'sentry/components/links/externalLink';
import {tct} from 'sentry/locale';

export default function TracePropagationMessage() {
  return (
    <AlertNoMargin type="info" showIcon>
      {tct(
        `To see replays for backend errors, ensure that you have set up trace propagation. To learn more, [link:read the docs].`,
        {
          link: (
            <ExternalLink href="https://docs.sentry.io/product/explore/session-replay/web/getting-started/#replays-for-backend-errors" />
          ),
        }
      )}
    </AlertNoMargin>
  );
}

const AlertNoMargin = styled(Alert)`
  margin-bottom: 0;
`;

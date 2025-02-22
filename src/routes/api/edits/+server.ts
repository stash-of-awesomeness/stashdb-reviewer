import { queryStore, gql } from '@urql/svelte'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { Client, cacheExchange, fetchExchange } from '@urql/svelte'
import { authExchange } from '@urql/exchange-auth'
import { STASH_AUTH_TOKEN } from '$env/static/private'

const client = new Client({
  url: 'https://stashdb.org/graphql',
  exchanges: [
    cacheExchange,
    authExchange(async utils => {
      return {
        addAuthToOperation(operation) {
          return utils.appendHeaders(operation, {
            'ApiKey': STASH_AUTH_TOKEN,
          })
        },
        didAuthError(error, operation) {
          return false
        },
        async refreshAuth() {
          //
        },
      }
    }),
    fetchExchange,
  ],
});

const EDIT_QUERY = gql`
query Edits($input: EditQueryInput!) {
  queryEdits(input: $input) {
    count
    edits {
      ...EditFragment
      __typename
    }
  __typename
  }
}

fragment CommentFragment on EditComment {
  id
  user {
    id
    name
    __typename
  }
  date
  comment
  __typename
}
  
fragment TagFragment on Tag {
  id
  name
  description
  deleted
  category {
    id
    name
    __typename
  }
  aliases
  __typename
}
fragment URLFragment on URL {
  url
  site {
    id
    name
    icon
    __typename
  }
  __typename
}
  
fragment ImageFragment on Image {
  id
  url
  width
  height
  __typename
}
  
fragment PerformerFragment on Performer {
  id
  name
  disambiguation
  deleted
  merged_into_id
  aliases
  gender
  birth_date
  death_date
  age
  height
  hair_color
  eye_color
  ethnicity
  country
  career_end_year
  career_start_year
  breast_type
  waist_size
  hip_size
  band_size
  cup_size
  tattoos {
    location
    description
    __typename
  }
  piercings {
    location
    description
    __typename
  }
  urls {
    ...URLFragment
    __typename
  }
  images {
    ...ImageFragment
    __typename
  }
  is_favorite
  __typename
}
  
fragment StudioFragment on Studio {
  id
  name
  aliases
  child_studios {
    id
    name
    __typename
  }
  parent {
    id
    name
    __typename
  }
  urls {
    ...URLFragment
    __typename
  }
  images {
    id
    url
    height
    width
  __typename
  }
  deleted
  is_favorite
  __typename
}
  
fragment ScenePerformerFragment on Performer {
  id
  name
  disambiguation
  deleted
  gender
  aliases
  __typename
}
  
fragment SceneFragment on Scene {
  id
  release_date
  production_date
  title
  deleted
  details
  director
  code
  duration
  urls {
    ...URLFragment
    __typename
  }
  images {
    ...ImageFragment
    __typename
  }
  studio {
    id
    name
    parent {
      id
      name
      __typename
    }
    __typename
  }
  performers {
    as performer {
      ...ScenePerformerFragment
      __typename
    }
    __typename
  }
  fingerprints {
    hash
    algorithm
    duration
    submissions
    reports
    user_submitted
    user_reported
    created
    updated
    __typename
  }
  tags {
    id
    name
    description
    aliases
    __typename
  }
  __typename
}
  
fragment FingerprintFragment on Fingerprint {
  hash
  algorithm
  duration
  __typename
}
  
fragment EditFragment on Edit {
  id
  target_type
  operation
  status
  bot
  applied
  created
  updated
  closed
  expires
  update_count
  updatable
  vote_count
  destructive
  comments {
    ...CommentFragment
    __typename
  }
  votes {
    user {
      id
      name
      __typename
    }
    date
    vote
    __typename
  }
  user {
    id
    name
    __typename
  }
  target {
    ... on Tag {
      ...TagFragment
      __typename
    }
      
    ... on Performer {
      ...PerformerFragment
      __typename
    }
      
    ... on Studio {
      ...StudioFragment
      __typename
    }
      
    ... on Scene {
      ...SceneFragment
      __typename
    }
    __typename
  }
  details {
    ... on TagEdit {
      name
      description
      added_aliases
      removed_aliases
      category {
        id
        name
        __typename
      }
      __typename
    }
      
    ... on PerformerEdit {
      name
      disambiguation
      added_aliases
      removed_aliases
      gender
      added_urls {
        ...URLFragment
        __typename
      }
      removed_urls {
        ...URLFragment
        __typename
      }
      birthdate
      deathdate
      ethnicity
      country
      eye_color
      hair_color
      height
      cup_size
      band_size
      waist_size
      hip_size
      breast_type
      career_start_year
      career_end_year
      added_tattoos {
        location
        description
        __typename
      }
      removed_tattoos {
        location
        description
        __typename
      }
      added_piercings {
        location
        description
        __typename
      }
      removed_piercings {
        location
        description
        __typename
      }
      added_images {
        ...ImageFragment
        __typename
      }
      removed_images {
        ...ImageFragment
        __typename
      }
      draft_id
      __typename
    }
      
    ... on StudioEdit {
      name
      added_aliases
      removed_aliases
      added_urls {
        ...URLFragment
        __typename
      }
      removed_urls {
        ...URLFragment
        __typename
      }
      parent {
        ...StudioFragment
        __typename
      }
      added_images {
        ...ImageFragment
        __typename
      }
      removed_images {
        ...ImageFragment
        __typename
      }
      __typename
    }
      
    ... on SceneEdit {
      title
      details
      added_urls {
        ...URLFragment
        __typename
      }
      removed_urls {
        ...URLFragment
        __typename
      }
      date
      production_date
      studio {
        ...StudioFragment
        __typename
      }
      added_performers {
        performer {
          ...PerformerFragment
          __typename
        }
        as
        __typename
      }
      removed_performers {
        performer {
          ...PerformerFragment
          __typename
        }
        as
        __typename
      }
      added_tags {
        ...TagFragment
        __typename
      }
      removed_tags {
        ...TagFragment
        __typename
      }
      added_images {
        ...ImageFragment
        __typename
      }
      removed_images {
        ...ImageFragment
        __typename
      }
      added_fingerprints {
        ...FingerprintFragment
        __typename
      }
      removed_fingerprints {
        ...FingerprintFragment
        __typename
      }
      duration
      director
      code
      draft_id
      __typename
    }
    __typename
  }
  old_details {    ... on TagEdit {      name      description      category {        id        name        __typename      }      __typename    }    ... on PerformerEdit {      name      disambiguation      gender      birthdate      deathdate      ethnicity      country      eye_color      hair_color      height      cup_size      band_size      waist_size      hip_size      breast_type      career_start_year      career_end_year      __typename    }    ... on StudioEdit {      name      parent {        ...StudioFragment        __typename      }      __typename    }    ... on SceneEdit {      title      details      added_urls {        ...URLFragment        __typename      }      removed_urls {        ...URLFragment        __typename      }      date      production_date      studio {        ...StudioFragment        __typename      }      added_performers {        performer {          ...PerformerFragment          __typename        }        as        __typename      }      removed_performers {        performer {          ...PerformerFragment          __typename        }        as        __typename      }      added_tags {        ...TagFragment        __typename      }      removed_tags {        ...TagFragment        __typename      }      added_images {        ...ImageFragment        __typename      }      removed_images {        ...ImageFragment        __typename      }      added_fingerprints {        ...FingerprintFragment        __typename      }      removed_fingerprints {        ...FingerprintFragment        __typename      }      duration      director      code      __typename    }    __typename  }
  merge_sources {    ... on Tag {      ...TagFragment      __typename    }    ... on Performer {      ...PerformerFragment      __typename    }    ... on Studio {      ...StudioFragment      __typename    }    ... on Scene {      ...SceneFragment      __typename    }    __typename  }
  options {    set_modify_aliases    set_merge_aliases    __typename  }
  __typename
}
`

export const GET: RequestHandler = async ({ request }) => {
  const edits = await client.query(EDIT_QUERY, {
    "input": {
      "direction": "DESC",
      "include_user_submitted": true,
      "is_bot": false,
      "is_favorite": false,
      "page": 1,
      "per_page": 20,
      "sort": "CREATED_AT",
      "status": "PENDING",
      "voted": "NOT_VOTED",
      "target_type": "PERFORMER",
    }
  })

  return json(edits.data.queryEdits)
}

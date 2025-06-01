import {
  Box,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react"

import { H1, H2, H3, H4, H5, H6 } from "@/components/Headings"
import Link from "@/components/Link"
import MarkdownImage from "@/components/Md/MarkdownImage"

const Header1 = (props) => {
  return (
    <Heading
      as="h1"
      textStyle="h1"
      fontSize={{ base: "32", md: "48" }}
      wordBreak="break-word"
      variant="action"
      {...props}
    />
  )
}

const Header2 = (props) => {
  return <H2 variant="action" fontSize={{ base: "28px", md: "36px" }} letterSpacing="1.8px" {...props} mt={32} />
}

const Header3 = (props) => {
  return <H3 variant="action" fontSize={{ base: "20px", md: "26px" }} letterSpacing="0.7px" {...props} mt={20} />
}

const Header4 = (props) => {
  return <H4 variant="action" fontSize={{ base: "18px", md: "22px" }} {...props} mt={14} />
}

const Header5 = (props) => {
  return <H5 variant="action" {...props} mt={12} />
}

const Header6 = (props) => {
  return <H6 variant="action" {...props} mt={8} />
}

const Paragraph = (props) => {
  return <Text textStyle="base-text" fontSize="15px" mb={4} {...props} />
}

const ListItemStyled = (props) => {
  return <ListItem textStyle="base-text" fontSize="15px" {...props} />
}

export const HR = () => (
  <Divider
    mt={8}
    mb={4}
    display="inline-block"
    position="inherit"
    height="1px"
    bg="action"
  />
)

// Enhanced blockquote version that properly separates quote from attribution
const BlockQuote = (props) => {
  // Process the children to extract quote and attribution
  const { quoteContent, attributionContent } = React.useMemo(() => {
    // Default - everything is quote content
    let quote = props.children;
    let attribution = null;

    // Convert children to searchable format
    let contentString = '';
    
    if (typeof props.children === 'string') {
      contentString = props.children;
    } else if (Array.isArray(props.children)) {
      contentString = props.children.map(child => {
        if (typeof child === 'string') return child;
        if (child?.props?.children && typeof child.props.children === 'string') 
          return child.props.children;
        return '';
      }).join('\n');
    } else if (props.children?.props?.children) {
      if (typeof props.children.props.children === 'string') {
        contentString = props.children.props.children;
      } else if (Array.isArray(props.children.props.children)) {
        contentString = props.children.props.children
          .map(c => typeof c === 'string' ? c : '')
          .join('\n');
      }
    }

    // Look for attribution pattern at the end - an em dash followed by text
    const attributionMatch = contentString.match(/([^\n]+)[\s\n]+—([^\n]+)$/);
    if (attributionMatch) {
      // The part before the attribution pattern is the quote
      const attrIndex = contentString.lastIndexOf(attributionMatch[0]);
      const quoteText = contentString.substring(0, attrIndex).trim();
      const attrText = attributionMatch[2].trim();
      
      // Format properly
      return {
        quoteContent: quoteText,
        attributionContent: `— ${attrText}`
      };
    }
    
    return { quoteContent: quote, attributionContent: attribution };
  }, [props.children]);

  return (
    <Box
      position="relative"
      px={10}
      py={4}
      my={8}
      mx="auto"
      color="gray.600"
      maxWidth="95%"
      borderLeft="none"
    >
      {/* Quote content box */}
      <Box
        position="relative"
        fontStyle="italic"
        fontSize="90%"
        lineHeight="1.7"
        mb={attributionContent ? 2 : 0}
        _before={{
          content: '"\\201C"', // opening quotation mark
          position: "absolute",
          top: "-20px",
          left: "-20px",
          fontSize: "4xl",
          fontFamily: "Georgia, serif",
          color: "action",
          opacity: 0.7,
        }}
        _after={{
          content: '"\\201D"', // closing quotation mark
          position: "absolute",
          bottom: "-5px",
          right: "-15px",
          fontSize: "4xl",
          fontFamily: "Georgia, serif",
          color: "action",
          opacity: 0.7,
        }}
      >
        {quoteContent}
      </Box>

      {/* Attribution - displayed separately from the quote */}
      {attributionContent && (
        <Box 
          mt={2}
          textAlign="right"
          fontStyle="normal"
          fontSize="85%"
          color="gray.500"
        >
          {attributionContent}
        </Box>
      )}
    </Box>
  );
}

// Add React import
import React from "react";

export const htmlElements = {
  a: Link,
  div: Box,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  p: Paragraph,
  img: MarkdownImage,
  li: ListItemStyled,
  ol: OrderedList,
  ul: UnorderedList,
  hr: HR,
  blockquote: BlockQuote,
}

/**
 * All base markdown components as default export
 */
const MdComponents = {
  ...htmlElements,
}

export default MdComponents
